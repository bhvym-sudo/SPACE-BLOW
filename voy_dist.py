import os 
import requests
from bs4 import BeautifulSoup

def retrieve_distance_data():
    r = requests.get("https://theskylive.com/voyager1-info")
    soup = BeautifulSoup(r.content, "html.parser")
    
    dist = soup.find("ar", {"class": "distanceKm"})
    print(dist.text)
retrieve_distance_data()

os.system("python voy_dist.py")