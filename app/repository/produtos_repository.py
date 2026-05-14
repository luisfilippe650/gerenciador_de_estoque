def criar(produto, cursor):
    sql = "insert into produtos (nome, preco, descricao) values (%s, %s, %s)"
    cursor.execute(sql, (produto.nome, produto.preco, produto.descricao))
    return cursor.lastrowid

def listar(cursor):
    sql = "select * from produtos"
    cursor.execute(sql)
    return cursor.fetchall()

def deletar(id: int, cursor):
    sql = "delete from produtos where id = %s"
    cursor.execute(sql, (id,))
    return cursor.rowcount
