#!/usr/bin/env python3
"""
GlowYou Local Development Server
Menjalankan local server port 3000 untuk menguji Web App & PWA GlowYou.
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Cache control untuk testing PWA
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"✨ GlowYou Web App berjalan di: http://localhost:{PORT}")
            print("Tekan Ctrl+C untuk menghentikan server.")
            httpd.serve_forever()
    except OSError:
        PORT = 8080
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"✨ Port 3000 terpakai, berjalan di: http://localhost:{PORT}")
            print("Tekan Ctrl+C untuk menghentikan server.")
            httpd.serve_forever()

