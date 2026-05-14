import mysql.connector
from mysql.connector import Error
import os


def connect():

    try:
        connection = mysql.connector.connect(
            host=os.getenv("DB_HOST", "127.0.0.1"),
            user=os.getenv("DB_USER", "root"),
            password=os.getenv("DB_PASSWORD", "610127"),
            database=os.getenv("DB_NAME", "gerenciadorestoque")
        )

        if connection.is_connected():
            return connection

    except Error as e:
        raise Exception(f"Problema na conexão: {e}")