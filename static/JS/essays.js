class MyDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            essaysIndex: 0,
            essays: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        fetch('..\\static\\JSON\\essays.json')
            .then(response => response.json())
            .then(data => this.setState({ essays: data, isLoading: false }));
    }

    render() {
        if (this.state.isLoading) {
            return (<p>Loading ....</p>)
        } else {
            return (

                <>
                    <div>
                        <h1>Essays</h1>
                        <h4><a href="../index.html">back</a></h4>
                        {this.state.essays.map(essays => {
                            return (
                                <>
                                    <div className="project">
                                        <h4 className="title">{essays.essay0['Title']}</h4>
                                        <p className="textbody">{essays.essay0['Text']}</p>
                                    </div>


                                </>
                            )
                        })}
                        <h4 className="bottomh4"><i><a href="../index.html">back</a></i></h4>
                    </div>

                </>

            ) //match return in else of isLoading 

        } //match else of isLoading
    }

}

ReactDOM.render(<MyDisplay />, document.querySelector('#divDisplay'))
