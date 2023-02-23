/* eslint-disable no-unused-vars */
import axios from "axios"

const API = {
  shoes: axios.create({
      baseURL: 'https://63f76e57e40e087c958eadaa.mockapi.io/shoes'
  }),

  async addShoes(content) {
    try {
      const response = await this.shoes.post('/', content);
      return response;
    } catch (error) {
      throw new Error ('addShoes failed ...', error);
    }
  },

  async editShoes(name, field) {
    try {
      const allShoes = await this.getShoes();
      const shoesToDelete = allShoes.filter(element => element.description === name);
      
      const imgUrl = shoesToDelete[0].imgUrl;
      const description = shoesToDelete[0].description;
      const price = shoesToDelete[0].price;

      const fieldToEdit = field.split('*');
      
      let obj = {};  

      switch (fieldToEdit[0]) {
        case 'imgUrl':
          obj = {imgUrl: `${fieldToEdit[1]}`}
          break;
        case 'description':
          obj = {description: `${fieldToEdit[1]}`}
          break;
        case 'price':
          obj = {price: `${fieldToEdit[1]}`}
          break;
        default: throw new Error('switch case went wrong');
      }
      
      this.shoes.put(`/${shoesToDelete[0].id}`, obj);
    } catch (error) {
      throw new Error ('deleteShoes failed ...', error);
    }
  },

  async deleteShoes(description) {
    try {
      const allShoes = await this.getShoes();
      const shoesToDelete = allShoes.filter(element => element.description === description);
      console.log(shoesToDelete);
      this.shoes.delete(`/${shoesToDelete[0].id}`);
    } catch (error) {
      throw new Error ('deleteShoes failed ...', error);
    }
  },

  async getShoes() {
      try {
          const response = await this.shoes.get('/');
          return response.data;
      } catch (error) {
        throw new Error ('getShoes failed ...', error);
      }
  }
}

export default API