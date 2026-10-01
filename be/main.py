from fastapi import FastAPI

app = FastAPI(title="Mini API", version="0.1.0")

@app.get("/")
def root():
    return {"status": "ok", "service": "mini-api", "message": "Render deploy thanh cong!"}

@app.get("/health")
def health():
    return {"status": "healthy"}