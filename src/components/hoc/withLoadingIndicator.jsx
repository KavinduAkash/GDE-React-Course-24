import React from "react";
const withLoadingIndicator = (WrappedComponent) => {
    class WithLoadingIndicator extends React.Component {
        state = {
            isLoading: true,
        };

        componentDidMount() {
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    loading={this.state.isLoading}
                />
            );
        }
    }

    WithLoadingIndicator.displayName = `withLoadingIndicator(${WrappedComponent.displayName || WrappedComponent.name})`;

    return WithLoadingIndicator;
};

export default withLoadingIndicator;