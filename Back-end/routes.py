from flask import render_template
from app import app


@app.route('/')
def index():
    return "inicio"

@app.route('/login', methods=['POST'])
def login():
    return "about"
