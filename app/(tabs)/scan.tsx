import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function ScanScreen() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      if (!permission?.granted) {
        const permissionResult = await requestPermission();
        if (!permissionResult.granted) {
          Alert.alert("No access to camera", "Permission denied");
        }
      }
    } catch (error) {
      console.error("Permission check failed:", error);
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading camera permissions...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to use the camera</Text>
        <TouchableOpacity
          onPress={checkPermission}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
        <Link href="/" asChild>
          <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={type}
        onMountError={(error) => {
          console.error("Camera mount error:", error);
          Alert.alert("Camera Error", "Failed to start camera");
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.buttonText}>Flip Camera</Text>
          </TouchableOpacity>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
  }
});