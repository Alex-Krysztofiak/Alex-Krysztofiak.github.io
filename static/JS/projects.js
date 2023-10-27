class MyDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectsIndex: 0,
            projects: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        fetch('..\\static\\JSON\\projects.json')
            .then(response => response.json())
            .then(data => this.setState({ projects: data, isLoading: false }));
    }

    render() {
        if (this.state.isLoading) {
            return (<p>Loading ....</p>)
        } else {
            return (

                <>
                    <div>
                        <h1>Projects</h1>
                        <h4><a href="../index.html">back</a></h4>
                        {this.state.projects.map(projects => {
                            return (
                                <>
                                    <div className="project">
                                        <h4 className="title">{projects.Title}</h4>

                                        {(() => {
                                            if (projects.GitHubLink) {
                                                return (
                                                    <a href={projects.GitHubLink} target="_blank" className="textbody">GitHub</a>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (projects.Website) {
                                                return (
                                                    <a href={projects.Website} target="_blank" className="textbody">{projects.Website}</a>
                                                )
                                            }
                                        })()}

                                        <p className="textbody">{projects.Text1}</p>
                                        <p className="textbody">{projects.Text2}</p>
                                        <p className="textbody">{projects.Tech}</p>
                                        <p className="essaybody">{projects.Text3}</p>
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
