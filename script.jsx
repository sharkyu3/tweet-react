class ListTweet extends React.Component {

    render() {
        return (
          <li>Name: {this.props.tweets.text}</li>
        );
    }
}

class Tweets extends React.Component {
    render() {
        console.log("inside of component:", this.props.tweets );
        let tweetsElements = this.props.tweets.map( (tweet, index) => {
                  return <ListTweet tweet={tweet} key={index}></ListTweet>;
                });

        console.log( "items elements",tweetsElements );
        return (
          <ul>
            {tweetsElements}
          </ul>
        );
    }
}

ReactDOM.render(
    <div>
        <ListTweet tweet={"HELLO"}/>

        <Tweets tweet={tweets} />
    </div>,
    document.getElementById('root')
);