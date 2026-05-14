from decimal import Decimal

from pydantic import BaseModel

class DataCreate(BaseModel):
    nome : str
    preco : Decimal
    descricao : str

