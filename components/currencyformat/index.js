export default num => (
    num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
)