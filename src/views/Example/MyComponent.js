import React from 'react';

class MyComponent extends React.Component {
    state = {
        name : '',
        age : '',
        address : 'Việt Nam'
    }
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value ,           
        })
    }
    handleOnclickAge = (event) => {
        this.setState({
            age: Math.floor(Math.random() * 100) , 
            
        })
    }
    handleOnclickk = () => {
        alert('Bắt sự kiện thành công')
    }
    render() {
        return(
            <>
            <div className='firstDiv'>
                <input value={this.state.name} type='text'
                    onChange={(event) => this.handleOnchangeName(event)}
                />
                My Name is {this.state.name} ,
                <button  value={this.state.age} type= 'text'
                    onClick={(event) => this.handleOnclickAge(event)}
                />
                 Iam {this.state.age} year old
            </div>
            <div className='secondDiv'>
                Iam from {this.state.address}
            </div>
            <div className='thirdDiv'>
                <button onClick={() => this.handleOnclickk()}>
                    ClickMe
                </button>
            </div>
            </>
        )
    }
}

export default MyComponent;