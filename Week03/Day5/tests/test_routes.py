from app import create_app

app = create_app()
client = app.test_client()

def test_profile_requires_token():
    res = client.get("/profile")
    assert res.status_code == 401
