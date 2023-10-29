

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
                                        
                                            
                                            <button className="accordion"><p className="textbody">{projects.Text3}</p></button>
                                            <div className="panel">
                                            <p className="essaybody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p className="essaybody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p className="essaybody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
                                            </div>
                                        
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
