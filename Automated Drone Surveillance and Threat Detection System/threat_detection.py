import cv2
import numpy as np
import tensorflow as tf

# Load a pre-trained object detection model (e.g., MobileNet SSD)
model = tf.keras.applications.MobileNetV2(weights='imagenet')

def detect_threat(frame):
    # Preprocess the frame
    img = cv2.resize(frame, (224, 224))
    img = np.expand_dims(img, axis=0)
    img = tf.keras.applications.mobilenet_v2.preprocess_input(img)
    
    # Perform detection
    preds = model.predict(img)
    # Decode the predictions
    decoded_preds = tf.keras.applications.mobilenet_v2.decode_predictions(preds, top=3)[0]
    
    # Check for threats (e.g., presence of a person, vehicle, etc.)
    for _, label, _ in decoded_preds:
        if label in ['person', 'car', 'truck']:
            return True
    return False

def process_video_stream():
    # Capture video from drone's camera (using OpenCV)
    cap = cv2.VideoCapture('drone_feed.mp4')  # Replace with actual video feed source
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        if detect_threat(frame):
            print("Threat detected!")
            # Send alert to backend server (e.g., using HTTP request)
        
        cv2.imshow('Drone Feed', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    process_video_stream()
