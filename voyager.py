from bs4 import BeautifulSoup
import requests
import time
import os

def clear_screen():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')



def retrieve_sensor_data():
    r = requests.get("https://science.nasa.gov/mission/voyager/where-are-they-now/")
    soup = BeautifulSoup(r.text, "html.parser")
    launch_date = soup.find_all("td")
    p = []
    for voy in launch_date:
        pr = str(voy.text)
        p.append(pr)
    
    instruments = []
    for i in range(0, len(p), 3):
        instrument_data = {
            "Instrument": p[i],
            "Voyager 1 Status": p[i + 1],
            "Voyager 2 Status": p[i + 2]
        }
        instruments.append(instrument_data)
    
    return instruments


data = retrieve_sensor_data()
print(data)