import axios from 'axios';

const iceAndFire = axios.create({
	baseURL: 'https://www.anapioficeandfire.com/api'
});

export default iceAndFire;