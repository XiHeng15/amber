import uuid
from typing import Optional
from pydantic import BaseModel, Field

class Person(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    first_name: str = Field(...)
    last_name: str = Field(...)
    age: int = Field(...)
    last_location: str = Field(...) # coordinates or address
    avatar: str = Field(...) # base64 encoded string?
    bounty: int = Field(...)

class Message(BaseModel):
    id: str = Field(...)
    sender: str = Field(...)
    sender_id: str = Field(...)
    contents: str = Field(...)


