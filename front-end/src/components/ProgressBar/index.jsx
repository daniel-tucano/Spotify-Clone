import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../css/ProgressBar.css'

export default class ProgressBar extends Component {

    static propTypes = {
        playedValue: PropTypes.number,
        loadedValue: PropTypes.number,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseUp: PropTypes.func,
        style: PropTypes.shape({
            progressBar: PropTypes.object,
            progressBarPlayed: PropTypes.object,
            progressBarLoaded: PropTypes.object,
            progressBarSliderButton: PropTypes.object,
        }),
    }

    static defaultProps = {
        playedValue: 0,
        loadedValue: 0,
        onChange: () => {},
        onMouseDown: () => {},
        onMouseUp: () => {},
        style: {
            progressBar: {},
            progressBarPlayed: {},
            progressBarLoaded: {},
            progressBarSliderButton: {},
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            // Valor de 0 a 1 indicando a posição atual da barra de progresso
            playedProgress: props.playedValue,
            // Valor de 0 a 1 indicando a posição atual da barra de load
            loadedProgress: 0,
            // Define se o mouse está sobre o ProgressBar
            isEntered: false,
            // Define se o player foi clicado
            isClicked: false,
            // Mudanças de estilo do ProgressBar
            currentStyle: props.style,
        };
    }

    // A cada vez que os props mudam essa função é chamada, alterando assim o estado
    // da variavel playedProgress, a utilização dessa função torna o controle das variaveis de estado
    // dentro dela possível apenas pela mudança desses valores a partir das props fornecidas
    // ou seja: setStates chamados dentro dessa classe não vão mudar mais esses states, apenas os 
    // valores das props que elas "puxam" fazem isso
    static getDerivedStateFromProps(props, state) {
        if (state.playedProgress !== props.playedValue){
            return {playedProgress: props.playedValue}
        }else if(state.loadedProgress !== props.loadedValue){
            return {loadedProgress: props.loadedValue}
        }else if(state.style !== props.style) {
            return {currentStyle: props.style}
        }
        return null
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.handleMouseUp)
        this.refProgressBar = React.createRef();
        this.refButton = React.createRef();
    }

    handleMouseDown = (e) => {
        if( this.state.isEntered ){
            console.log('Pagex: '+e.pageX)
            console.log('ClientX: ' + e.clientX)
            console.log('ScreenX: '+e.screenX)
            console.log(e)
            document.addEventListener('mousemove', this.handleMove)
            this.setState({ isClicked: true })
            const current_played_progress = this.calculateProgress(this.refProgressBar.current.getBoundingClientRect().left, e.pageX, this.refProgressBar.current.offsetWidth)
            this.props.onMouseDown(current_played_progress)
        }
        return
    }

    handleMouseUp = (e) => {
        document.removeEventListener('mousemove', this.handleMove)
        this.setState({ isClicked: false })
        
        if( this.state.isEntered ){
            const current_played_progress = this.calculateProgress(this.refProgressBar.current.getBoundingClientRect().left, e.pageX, this.refProgressBar.current.offsetWidth)
            this.props.onMouseUp(current_played_progress)
        }

        return
    }

    handleMove = (e) => {
        const current_played_progress = this.calculateProgress(this.refProgressBar.current.getBoundingClientRect().left, e.pageX, this.refProgressBar.current.offsetWidth)

        this.props.onChange(current_played_progress)
        return
    }

    handleMouseEnterProgressBar = () => {
        this.setState({ isEntered: true })
        return
    }

    handleMouseLeaveProgressBar = () => (
        this.setState({ isEntered: false, })
    )

    calculateProgress(offsetX,positionX,width) {
        return Math.min(Math.max((positionX - offsetX)/width,0),1)
    }

    render() {
        return (
            <div className={'progress-bar' + ((this.state.isEntered || this.state.isClicked) ? ' progress-bar-hovered' : '')} onMouseEnter={this.handleMouseEnterProgressBar} onMouseLeave={this.handleMouseLeaveProgressBar} onMouseMove={this.state.isClicked ? (e) => this.handleMove(e) : null} onMouseDown={(e) => this.handleMouseDown(e)}
                onMouseUp={(e) => this.handleMouseUp(e)} style={this.props.style.ProgressBar} ref={this.refProgressBar}>

                <div className='progress-bar-middle-alingment'>
                    <div className='progress-bar-wrapper'>
                        <div 
                            className='progress-bar-played'
                            style={{...this.props.style.progressBarPlayed,...{transform: `translateX(${this.state.playedProgress*100 - 100 }%)`}}}
                        />
                        <div
                            className='progress-bar-loaded'
                            style={{...this.props.style.progressBarLoaded,...{transform: `translateX(${this.state.loadedProgress*100 - 100 }%)`}}}
                        />
                    </div>
                    <button
                        className='progress-bar-slider-button'
                        style={{...this.props.style.progressBarSliderButton,...{left:this.state.playedProgress*100 + '%'}}}
                        draggable={false}
                    />
                </div>
            </div>
        )
    }

}