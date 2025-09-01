
# FastAPI Backend
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models, database
import random, string
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=database.engine)
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow frontend requests
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    """
    Opens a DB session
    """
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# endpoints

@app.post("/generate/")
def generate_entry(db: Session=Depends(get_db)):
    random_content = ''.join(random.choices(string.ascii_letters, k=10))
    entry = models.Entry(content=random_content)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry

@app.get("/entries/")
def get_entries(db: Session= Depends(get_db)):
    return db.query(models.Entry).all()

@app.delete("/clear/")
def clear_database(db: Session=Depends(get_db)):
    db.query(models.Entry).delete()
    db.commit()
    return {"message": "Database cleared"}
    

