from app_orm import db, Task, app

with app.app_context():
    db.create_all()

    tasks = [
        Task(title="Buy groceries"),
        Task(title="Read book", status="done"),
        Task(title="Write Flask app")
    ]

    for task in tasks:
        db.session.add(task)

    db.session.commit()
    print("Database seeded successfully!")
