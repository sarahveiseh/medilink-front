// import React from 'react'
// import PropTypes from 'prop-types'
// // @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'
// import ListItem from '@material-ui/core/ListItem'
// import List from '@material-ui/core/List'
// // core components
// import footerStyle from 'assets/jss/material-dashboard-react/components/footerStyle'

// const Footer = ({...props}) => {
//   // const { classes } = props
//   return (
//     <footer className="right-0 w-full">
//       <p className="flex flex-row-reverse">
//         <span>&copy; {1900 + new Date().getYear()} Utopiops-Water</span>
//       </p>
//     </footer>
//     // <footer className="right-0 w-full">
//     //   <div className={classes.container}>
//     //     <div className={classes.left}>
//     //       {/* <List className={classes.list}>
//     //         <ListItem className={classes.inlineBlock}>
//     //           <a href="#home" className={classes.block}>
//     //             Home
//     //           </a>
//     //         </ListItem>
//     //         <ListItem className={classes.inlineBlock}>
//     //           <a href="#company" className={classes.block}>
//     //             Company
//     //           </a>
//     //         </ListItem>
//     //         <ListItem className={classes.inlineBlock}>
//     //           <a href="#portfolio" className={classes.block}>
//     //             Portfolio
//     //           </a>
//     //         </ListItem>
//     //         <ListItem className={classes.inlineBlock}>
//     //           <a href="#blog" className={classes.block}>
//     //             Blog
//     //           </a>
//     //         </ListItem>
//     //       </List> */}
//     //     </div>
//     //     <p className={classes.right}>
//     //       <span>&copy; {1900 + new Date().getYear()} Utopiops-Water</span>
//     //     </p>
//     //   </div>
//     // </footer>
//   )
// }

// // Footer.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // }

// // export default withStyles(footerStyle)(Footer)

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full px-4 right-5">
      <p className="flex flex-row-reverse">
        <span>&copy; {1900 + new Date().getYear()} Utopiops-Water</span>
      </p>
    </footer>
  )
}

export default Footer
