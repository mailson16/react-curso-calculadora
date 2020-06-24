import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do calculadoraService',()=>{

    const [calcular,concatenarNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalculadoraService();

    it('deve garantir  que 1 + 4 = 5', ()=>{
        let soma = calcular(1,4, SOMA);
        expect(soma).toEqual(5);
    });

    it('deve garantir que 1-4 = -3', ()=>{
        let substracao = calcular(1,4, SUBTRACAO);
        expect(substracao).toEqual(-3);
    });

    it('deve garantir que 1*4 = 4', ()=>{
        let multiplicacao = calcular(1,4, MULTIPLICACAO);
        expect(multiplicacao).toEqual(4);
    });

    it('deve garantir que 1 / 4 = 0.25', ()=>{
        let  divisao = calcular(1,4, DIVISAO);
        expect(divisao).toEqual(0.25);
    });

    it('operação invalida', ()=>{
        let  invalido = calcular(1,4, '%');
        expect(invalido).toEqual(0);
    });
});