import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GererServerService {
  tabServers = [
    {
      id : 1,
      name : 'Serveur de production',
      status : 'online'
    },
    {
      id: 2,
      name : 'Serveur de test',
      status : 'online'
    },
    {
      id : 3,
      name : 'Serveur de Deploiement',
      status : 'offline'
    }
  ]
  
  constructor() { }

  getServerById(id) {
    return this.tabServers.find(s => s.id == id)
  }
}
