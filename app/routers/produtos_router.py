from app.services.produtos_service import (
deletar_service,
criar_service,
listar_service
)
from fastapi import APIRouter

from app.schemas.data import DataCreate

router = APIRouter(
    prefix="/produtos",
    tags=["produtos"],
)

@router.get("/")
def ver_produtos():

    return listar_service()

@router.post("/")
def criar_produto(data: DataCreate):
    return criar_service(data)

@router.delete("/{id}")
def deletar_produto(id: int):
    return deletar_service(id)

