from app import create_app

app = create_app()
client = app.test_client()

def test_login_success():
    res = client.post("/login", json={"username":"alice","password":"password123"})
    assert res.status_code == 200
    assert "access_token" in res.get_json()

def test_login_failure():
    res = client.post("/login", json={"username":"alice","password":"wrong"})
    assert res.status_code == 401
