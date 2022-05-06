const Index =  () => {
    const role='admin'
    switch(role) {
        case 'admin': 
        return <div>detail / delete this doctor</div>
        case 'patient':
        return <div>detail and chat and booking appointment</div>
        default:
            return null
    }
}
export default Index
