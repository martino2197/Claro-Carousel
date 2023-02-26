
import { AdidasBall, AdidasShoes, AsusLaptop, HardDisk, Iphone14, LegoStarWars, Microphone, NintendoSwitch, SmarTv, SonyHeadphones } from "../assets";
import { Product } from "./types";

export const ListOfProducts: Product[] = [
    {
        id: "1",
        name: "Adidas AZ5204",
        image: AdidasBall,
        description: "5 Euro 2016 Glider Bola de fútbol, Blanco, 5",
        price: 649
    },
    {
        id: "2",
        name: "Adidas Equipo Mundial",
        image: AdidasShoes,
        description: "Zapatos para fútbol para Hombre",
        price: 649
    },
    {
        id: "3",
        name: "Asus Laptop Gamer TUF F15",
        image: AsusLaptop,
        description: "FX506HEB-HN145W / GeForce RTX 3050 Ti / Intel Core i5 11th Gen / 15.6 Pulg / 512gb SSD / 8gb RAM",
        price: 649
    },
    {
        id: "4",
        name: "ADATA Disco Duro Externo HDD",
        image: HardDisk,
        description: "HD710P, 2 TB, Resistente a golpes, agua y polvo, certificación grado militar, Color Azul",
        price: 649
    },
    {
        id: "5",
        name: "Apple iPhone 14",
        image: Iphone14,
        description: "128 GB Medianoche",
        price: 649
    },
    {
        id: "6",
        name: "Halcón Milenario",
        image: LegoStarWars,
        description: "Kit de construcción LEGO® Star Wars: El Ascenso de Skywalker",
        price: 649
    },
    {
        id: "7",
        name: "Nintendo Consola Switch",
        image: NintendoSwitch,
        description: "Neon 32GB Version 1.1 - Standard Edition",
        price: 649
    },
    {
        id: "8",
        name: "Hisense Pantalla 43",
        image: SmarTv,
        description: "UHD Smart TV LED 43A6H Google TV (2022)",
        price: 649
    },
    {
        id: "9",
        name: "Blue Yeti Micrófono USB",
        image: Microphone,
        description: "Streaming, Gaming, Podcasts en PC y Mac, Micrófono de Condensador para Computadora",
        price: 649
    },
    {
        id: "10",
        name: "Sony WH1000XM4/B",
        image: SonyHeadphones,
        description: "Audífonos inalámbricos con Cancelación de Ruido, Negro, Grande",
        price: 649
    },
  ];