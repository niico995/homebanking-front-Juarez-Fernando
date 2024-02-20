import axios from "axios";

export const creditCards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/2")
            .then(response => {
                const clientData = response.data;
                setCards(clientData.accounts.cards);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return cards

}

