# Use an official Python base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --use-deprecated=legacy-resolver -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose a port if your application needs it (e.g., FastAPI runs on 8000)
EXPOSE 8000

# Command to run your application (modify this to fit your needs)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]