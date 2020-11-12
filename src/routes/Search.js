import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import "./Home.css";
import "./Search.css";

class Search extends React.Component {
    state = {
        isLoading : true,
        Music: [],
        value: ""
    };
    getSearchMusic = async () => {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
            headers: {
              'x-rapidapi-key': '424ced4acemsh23df6f0208aa7cap13e211jsn792b6f9f6e00',
              'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
          };
        axios.request(options).then(function (response) {
            this.setState({Music:response.data, isLoading: false});
        }).catch(function (error) {
            console.error(error);
        });
        
          
    }
    componentDidMount() {
        this.getSearchMusic();
    };

    handleChange = (e : any) => {
        this.setState({value: e.target.value});
    } 
}