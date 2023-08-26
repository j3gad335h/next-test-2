import { Box, Container, Divider, Grid, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
export default function SmesFinancingTable() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    return (
        <section className={classes.section}>
            <Container className={classes.Container}>
                <Grid container spacing={2}>
                    <Grid  textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='h1' className={classes.Title}>{t('smes.smesFinancingPrograms')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box p={2}>
                            <Typography className={classes.Discription}>{t('smes.smesFinancingProgramsTableTitle')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.Container}>
                <TableContainer className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <StyledTableCell className={classes.tableHeadCell}>{t('smes.smesFinancingProgramsTableHead1')}</StyledTableCell>
                                <StyledTableCell className={classes.tableHeadCell}>{t('smes.smesFinancingProgramsTableHead2')}</StyledTableCell>
                                <StyledTableCell className={classes.tableHeadCell}>{t('smes.smesFinancingProgramsTableHead3')}</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow >
                                <StyledTableCell  className={classes.tableCell} component="th" scope="row">{t('smes.smesFinancingProgramsTableRow1Cell1')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow1Cell2')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow1Cell3')}</StyledTableCell >
                            </StyledTableRow >
                            <StyledTableRow >
                                <StyledTableCell  className={classes.tableCell} component="th" scope="row">{t('smes.smesFinancingProgramsTableRow2Cell1')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow2Cell2')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow2Cell3')}</StyledTableCell >
                            </StyledTableRow >
                            <StyledTableRow >
                                <StyledTableCell  className={classes.tableCell} component="th" scope="row">{t('smes.smesFinancingProgramsTableRow3Cell1')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow3Cell2')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow3Cell3')}</StyledTableCell >
                            </StyledTableRow >
                            <StyledTableRow >
                                <StyledTableCell  className={classes.tableCell} component="th" scope="row">{t('smes.smesFinancingProgramsTableRow4Cell1')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow4Cell2')}</StyledTableCell >
                                <StyledTableCell  className={classes.tableCell}>{t('smes.smesFinancingProgramsTableRow4Cell3')}</StyledTableCell >
                            </StyledTableRow >
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography className={classes.TableDiscription}>{t('smes.smesFinancingProgramsNotes')}</Typography>
            </Container>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography style={{textAlign: locale === 'en' ? 'right' : 'left',}} className={classes.UpdateDate}>{t('smes.smesFinancingUpdateDate')}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

const useStyles = makeStyles((theme, locale) => ({
    Container: {
        padding: '0px 10px 0px 10px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
        }
    },
    titleGrid: {
        padding: '0px 10px 0px 10px',
        [theme.breakpoints.up('sm')]: {
            padding: '0px 50px 0px 50px',
        }
    },
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
        fontWeight: '500',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
            color: '#1E396C',
            textAlign: 'center',
            fontWeight: '600',
        }
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '24px',
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
        }
    },
    Divider: {
        width: 'auto',
        height: '2px',
        background: '#37A753',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '10px',
    },
    SubTitle: {
        textAlign: 'center',
        fontSize: '25px',
        color: "#1E396C",
        padding: '15px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            color: '#1E396C',
            textAlign: 'center',
        }
    },
    tableContainer: {
        background: '#FFF',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius:'5px'

    },
    tableCell: {
        fontSize: '14px',
        textAlign: 'inherit'

    },
    tableHead: {
        backgroundColor: "#36A852",
        color: '#fff !important',

    },
    tableHeadCell: {
        color: '#fff !important',
        textAlign: 'inherit',
        fontSize: '16px',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            textAlign: 'center',
        }

    },
    TableDiscription: {
        fontSize: '14px',
        marginTop: '20px',
        textAlign: 'inherit'


    },
    UpdateDate: {
        fontSize: '14px',
        marginTop: '20px',
        textAlign: locale === 'en' ? 'right' : 'right',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            textAlign: 'center',
        }
    },
}));
