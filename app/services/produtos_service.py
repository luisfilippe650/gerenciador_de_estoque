from app.repository.produtos_repository import (
criar,
deletar,
listar,
)
from app.core.database import connect
from app.schemas.data import DataCreate


def criar_service(data : DataCreate):

    database = None
    cursor = None

    try:

        database = connect()
        cursor = database.cursor()

        response = criar(data,cursor)
        database.commit()

        return response

    except Exception as e:

        if database is not None:
            database.rollback()
        raise Exception(f"error ao crier {e}")

    finally:
        if cursor is not None:
            cursor.close()
        if database is not None:
            database.close()

def listar_service():
    database = None
    cursor = None

    try:
        database = connect()
        cursor = database.cursor(dictionary=True)

        response = listar(cursor)

        return response

    except Exception as e:
        if database is not None:
            database.rollback()

        raise Exception(f"error ao listar {e}")
    finally:
        if cursor is not None:
            cursor.close()
        if database is not None:
            database.close()

def deletar_service(id : int):

    database = None
    cursor = None
    try:
        database = connect()
        cursor = database.cursor()

        response = deletar(id,cursor)
        database.commit()

        return response

    except Exception as e:
        if database is not None:
            database.rollback()

        raise Exception (f"error ao deletar {e}")

    finally:
        if cursor is not None:
            cursor.close()
        if database is not None:
            database.close()
