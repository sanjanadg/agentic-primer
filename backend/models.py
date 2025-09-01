
# SQLAlchemy models

from sqlalchemy import Column, Integer, String
from database import Base

class Entry(Base):
    """
    Represents an Entry object to be added to the database
    
    """
    __tablename__="entries"
    id = Column(Integer, primary_key=True, index=True)
    content = Column(String, index=True)

