USE [Employee]
GO
/****** Object:  Table [dbo].[Departments]    Script Date: 2/26/2024 4:59:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
	[DepartmentID] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentName] [varchar](100) NULL,
 CONSTRAINT [PK_Departments] PRIMARY KEY CLUSTERED 
(
	[DepartmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 2/26/2024 4:59:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[EmpID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](25) NULL,
	[LastName] [varchar](25) NULL,
	[Email] [varchar](50) NULL,
	[DOB] [datetime] NULL,
	[DepartMentID] [int] NULL,
	[ProfilePicture] [varchar](100) NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmpID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[sp_Department_GetALL]    Script Date: 2/26/2024 4:59:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_Department_GetALL]
as

begin
select * from Departments;
end
GO
/****** Object:  StoredProcedure [dbo].[Sp_Employee_AddToDB]    Script Date: 2/26/2024 4:59:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[Sp_Employee_AddToDB]
@FirstName varchar(25),@LastName varchar(25),@Email varchar(50),@DOB datetime,
@DepartMentID int,@ProfilePicture varchar(100),
@EmpID int out
as

Begin
insert into Employees(FirstName,LastName,Email,DOB,DepartMentID,ProfilePicture)
values(@FirstName,@LastName,@Email,@DOB,@DepartMentID,@ProfilePicture)
set @EmpID=@@IDENTITY

select @EmpID
end

GO
/****** Object:  StoredProcedure [dbo].[Sp_Employee_GetALL]    Script Date: 2/26/2024 4:59:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[Sp_Employee_GetALL]
as

Begin

select T1.[EmpID]
      ,T1.[FirstName]
      ,T1.[LastName]
      ,T1.[Email]
      ,format( DOB, 'dd-MMM-yyyy') AS DOB
      ,T1.[DepartMentID]
      ,T1.[ProfilePicture],T2.DepartmentName from Employees  T1
left join Departments T2 on T1.DepartMentID=T2.DepartmentID
end

GO
/****** Object:  StoredProcedure [dbo].[Sp_Employee_UpdateToDB]    Script Date: 2/26/2024 4:59:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[Sp_Employee_UpdateToDB]
@EmpID int,@FirstName varchar(25),@LastName varchar(25),@Email varchar(50),@DOB datetime,@DepartMentID int,@ProfilePicture varchar(100)
as

Begin
update  Employees set FirstName=@FirstName,
LastName=@LastName,Email=@Email,DOB=@DOB,DepartMentID=@DepartMentID,ProfilePicture=@ProfilePicture  
where EmpID=@EmpID;
end

GO
