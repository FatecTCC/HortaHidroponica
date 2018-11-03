const mongoose = require('mongoose');
//const AutomIncrement = require('mongoose-sequence').mongo
const Schema = mongoose.Schema;

const Historico = new Schema({
	ph: { type: Number, min: 0, max: 14 },
	data: Date,
	turbidez: Number,
	vazao: String,
	umidadeRelAr: String,
	temperatura: String
});

const PedidoSchema = new Schema({
	quantidade: Number,
	Preco: Number
});

const HortaSchema = new Schema({
	nome: String,
	cidade: String,
	temperatura: Number,
	profSolo: Number,
	nutrientes: String,
	clima: String,
	umidade: Number,
	ph: { type: Number, min: 0, max: 14 },
	data: Date,
	turbidez: Number,
	vazao: String,
	umidadeRelAr: String,
	historico: [Historico]

});

const UsuarioSchema = new Schema({
	id: Number,
	nome: String,
	sobrenome: String,
	senha: String,
	cpf: Number,
	email: { type: String, lowercase: true },
	endereco: String,
	numero: String,
	telefone: String,
	cidade: String,
	estado: String,
	hortas: [HortaSchema],
	pedidos: [PedidoSchema],
	googleId: String,
	facebookId: String
});

const Usuario = mongoose.model('cliente', UsuarioSchema);
//UsuarioSchema.plugin(AutomIncrement, {hortas: {id}});

module.exports = Usuario;

module.exports.createUser = function (newUser, callback) {
	var bcrypt = require('bcryptjs');
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(newUser.senha, salt, function (err, hash) {
			newUser.senha = hash;
			newUser.save(callback);
		});
	});
}