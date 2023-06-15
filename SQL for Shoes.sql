create database `shoesWebsite`;
use `shoesWebsite`;
create table `memberData` (
  `memberID` int NOT NULL AUTO_INCREMENT,
  `password` varchar(20) DEFAULT NULL,
  `memberEmail` varchar(50) NOT NULL,
  `memberFName` varchar(20) NOT NULL,
  `memberLName` varchar(20) NOT NULL,
  `memberUName` varchar(20) NOT NULL,
  `memberPhone` varchar(20) NOT NULL,
  `memberAddress` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`memberID`)
);
Create table `customerService`(
`inquiryID` int NOT NULL auto_increment,
`INQFName` varchar(20) NOT NULL,
`INQLName` varchar(20) NOT NULL,
`INQEmail` varchar(50) NOT NULL,
`inquiry` varchar(500) NOT NULL,
PRIMARY KEY (`inquiryID`)
);