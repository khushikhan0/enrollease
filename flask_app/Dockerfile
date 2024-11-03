# Use the official Python image
FROM python:3.9

# Set the working directory
WORKDIR /app
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y\
libgl1 \
poppler-utils \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*


# Copy the rest of your application
COPY app ./app

# Expose the port that Flask runs on
EXPOSE 5000

# Command to run the application
CMD ["python", "app/main.py"]