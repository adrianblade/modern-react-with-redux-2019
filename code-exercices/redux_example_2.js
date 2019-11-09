<script type="text/babel" data-plugins="proposal-class-properties" data-presets="env,react">
    // Action Creators - You don't need to change these
    const increment = () => ({ type: 'increment' });
    const decrement = () => ({ type: 'decrement' });

    const Counter = ({increment, decrement, count}) => {
        return (
            <div>
                <button className="increment" onClick={()=>increment(count)}>Increment</button>
                <button className="decrement" onClick={()=>decrement(count)}>Decrement</button>
                Current Count: <span>{count}</span>
            </div>
        );
    };

    const mapStateToProps = ({count}) => ({count})

    const WrappedCounter = ReactRedux.connect(mapStateToProps, {increment, decrement})(Counter);

    // Only change code *before* me!
    // -----------

    const store = Redux.createStore(Redux.combineReducers({
        count: (count = 0, action) => {
            if (action.type === 'increment') {
                return count + 1;
            } else if (action.type === 'decrement') {
                return count - 1;
            } else {
                return count;
            }
        }
    }));

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <WrappedCounter />
        </ReactRedux.Provider>,
        document.querySelector('#root')
    );
</script>
