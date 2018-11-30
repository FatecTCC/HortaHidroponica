# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  config.vm.define :aplicacao do |aplicacao|
    aplicacao.vm.box = "NodeJS_e_MongoDb_Funcionando"
    aplicacao.vm.network :private_network, ip: "10.0.0.10"
    aplicacao.vm.hostname = "aplicacao"
    aplicacao.vm.synced_folder "./../../TCC/Aplicacao", "/home/vagrant/TCC/Aplicacao", type:"virtualbox"
    aplicacao.vm.network "forwarded_port", guest: 3000, host: 3000
  end
  config.vm.define :arduino1 do |arduino1|
    arduino1.vm.box = "NodeJS_e_MongoDb_Funcionando"
    arduino1.vm.network :private_network, ip: "10.0.0.11"
    arduino1.vm.hostname = "arduino1"
    arduino1.vm.synced_folder "./../../TCC/Arduino1", "/home/vagrant/TCC/Arduino1", type:"virtualbox"
    arduino1.vm.network "forwarded_port", guest: 3001, host: 3001
  end
  config.vm.define :arduino2 do |arduino2|
    arduino2.vm.box = "NodeJS_e_MongoDb_Funcionando"
    arduino2.vm.network :private_network, ip: "10.0.0.12"
    arduino2.vm.hostname = "arduino2"
    arduino2.vm.synced_folder "./../../TCC/Arduino2", "/home/vagrant/TCC/Arduino2", type:"virtualbox"
    arduino2.vm.network "forwarded_port", guest: 3002, host: 3002
  end
  config.vm.define :arduino3 do |arduino3|
    arduino3.vm.box = "NodeJS_e_MongoDb_Funcionando"
    arduino3.vm.network :private_network, ip: "10.0.0.13"
    arduino3.vm.hostname = "arduino3"
    arduino3.vm.synced_folder "./../../TCC/Arduino3", "/home/vagrant/TCC/Arduino3", type:"virtualbox"
    arduino3.vm.network "forwarded_port", guest: 3003, host: 3003
  end
  config.vm.define :api do |api|
    api.vm.box = "NodeJS_e_MongoDb_Funcionando"
    api.vm.network :private_network, ip: "10.0.0.14"
    api.vm.hostname = "api"
    api.vm.synced_folder "./../../TCC/Api", "/home/vagrant/TCC/Api", type:"virtualbox"
    api.vm.network "forwarded_port", guest: 3004, host: 3004
  end
end
