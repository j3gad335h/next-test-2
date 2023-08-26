import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import BaseUrl from '../../baseUrl';
import TeamModal from '../../components/ModalBox/TeamModal';

export default function AboutTeam() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const [openModal1, setOpenModal1] = React.useState(false);
    const [openModal2, setOpenModal2] = React.useState(false);
    const [openModal3, setOpenModal3] = React.useState(false);
    const [openModal4, setOpenModal4] = React.useState(false);
    const [openModal5, setOpenModal5] = React.useState(false);
    const handleOpenModal1 = () => {
        setOpenModal1(true);
    };
    const handleCloseModal1 = () => {
        setOpenModal1(false);
    };
    const handleOpenModal2 = () => {
        setOpenModal2(true);
    };
    const handleCloseModal2 = () => {
        setOpenModal2(false);
    };
    const handleOpenModal3 = () => {
        setOpenModal3(true);
    };
    const handleCloseModal3 = () => {
        setOpenModal3(false);
    };
    const handleOpenModal4 = () => {
        setOpenModal4(true);
    };
    const handleCloseModal4 = () => {
        setOpenModal4(false);
    };
    const handleOpenModal5 = () => {
        setOpenModal5(true);
    };
    const handleCloseModal5 = () => {
        setOpenModal5(false);
    };

    const image1 = "/assetsNew/images/aboutImages/team-member1.webp";
    const image2 = "/assetsNew/images/aboutImages/member2.webp";
    const image3 ="/assetsNew/images/aboutImages/member3.webp";
    const image4 = "/assetsNew/images/aboutImages/team-member3.webp";
    const image5 ="/assetsNew/images/aboutImages/team-member5.webp";
    const modalimage1 ="/assetsNew/images/aboutImages/im03.webp";
    const modalimage2 ="/assetsNew/images/aboutImages/im01.webp";
    const modalimage3 ="/assetsNew/images/aboutImages/im02.webp";
    const modalimage4 ="/assetsNew/images/aboutImages/im05.webp";
    const modalimage5 = "/assetsNew/images/aboutImages/im04.webp";

    return (
        <section className={classes.teamSection}>
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('about.aboutTeamTitle')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box p={2}>
                            <Typography className={classes.Discription}>{t('about.aboutTeamDiscripition')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container  className={classes.Container}>
                <Grid container spacing={2}>
                    <Grid textAlign={'center'} className={classes.TeamGrid} item xs={12} sm={6} md={2.4} lg={2.4} xl={2.4}>
                        <Box onClick={handleOpenModal1}>
                            <Image width={100} height={100} onClick={handleOpenModal1} src={image4} alt="image4" className={classes.Teamimg} />
                            <Typography onClick={handleOpenModal1} className={classes.Teamname}>
                                {t('about.aboutTeamMember5')}
                            </Typography>
                            <Typography className={classes.Memberpostistion}>{t('about.aboutTeamMember5Position')}</Typography>
                        </Box>
                    </Grid>
                    <Grid textAlign={'center'} className={classes.TeamGrid} item xs={12} sm={6} md={2.4} lg={2.4} xl={2.4}>
                        <Box onClick={handleOpenModal2}>
                            <Image width={100} height={100} onClick={handleOpenModal2} src={image2} alt="image4" className={classes.Teamimg} />
                            <Typography onClick={handleOpenModal2} className={classes.Teamname}>
                                {t('about.aboutTeamMember2')}
                            </Typography>
                            <Typography className={classes.Memberpostistion}>{t('about.aboutTeamMember2Position')}</Typography>
                        </Box>
                    </Grid>
                    <Grid textAlign={'center'} className={classes.TeamGrid} item xs={12} sm={6} md={2.4} lg={2.4} xl={2.4}>
                        <Box onClick={handleOpenModal3}>
                            <Image width={100} height={100} onClick={handleOpenModal3} src={image1} alt="image4" className={classes.Teamimg} />
                            <Typography onClick={handleOpenModal3} className={classes.Teamname}>
                                {t('about.aboutTeamMember3')}
                            </Typography>
                            <Typography className={classes.Memberpostistion}>{t('about.aboutTeamMember3Position')}</Typography>
                        </Box>
                    </Grid>
                    <Grid textAlign={'center'} className={classes.TeamGrid} item xs={12} sm={6} md={2.4} lg={2.4} xl={2.4}>
                        <Box onClick={handleOpenModal4}>
                            <Image width={100} height={100} onClick={handleOpenModal4} src={image3} alt="image4" className={classes.Teamimg} />
                            <Typography onClick={handleOpenModal4} className={classes.Teamname}>
                                {t('about.aboutTeamMember4')}
                            </Typography>
                            <Typography className={classes.Memberpostistion}>{t('about.aboutTeamMember4Position')}</Typography>
                        </Box>
                    </Grid>
                    <Grid textAlign={'center'} className={classes.TeamGrid} item xs={12} sm={6} md={2.4} lg={2.4} xl={2.4}>
                        <Box onClick={handleOpenModal5}>
                            <Image width={100} height={100} onClick={handleOpenModal5} src={image5} alt="image4" className={classes.Teamimg} />
                            <Typography onClick={handleOpenModal5} className={classes.Teamname}>
                                {t('about.aboutTeamMember1')}
                            </Typography>
                            <Typography className={classes.Memberpostistion}>{t('about.aboutTeamMember2Position')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* modal1 */}
            <TeamModal
                modalimage={modalimage4}
                modalTitle={t('about.aboutTeamMember5')}
                memberPosition={t('about.aboutTeamMember5Position')}
                memberDescriptions={[
                    t('about.aboutTeamMember5Discription1'),
                    t('about.aboutTeamMember5Discription2'),
                    t('about.aboutTeamMember5Discription3'),
                    t('about.aboutTeamMember5Discription4'),
                    t('about.aboutTeamMember5Discription5'),
                    t('about.aboutTeamMember5Discription6'),
                ]}
                open={openModal1}
                onClose={handleCloseModal1}
            />
            {/* modal2 */}
            <TeamModal
                modalimage={modalimage2}
                modalTitle={t('about.aboutTeamMember2')}
                memberPosition={t('about.aboutTeamMember2Position')}
                memberDescriptions={[
                    t('about.aboutTeamMember2Discription1'),
                    t('about.aboutTeamMember2Discription2'),
                    t('about.aboutTeamMember2Discription3'),
                    t('about.aboutTeamMember2Discription4'),
                    t('about.aboutTeamMember2Discription5'),
                ]}
                open={openModal2}
                onClose={handleCloseModal2}
            />
            {/* modal3 */}
            <TeamModal
                modalimage={modalimage1}
                modalTitle={t('about.aboutTeamMember3')}
                memberPosition={t('about.aboutTeamMember3Position')}
                memberDescriptions={[
                    t('about.aboutTeamMember3Discription1'),
                    t('about.aboutTeamMember3Discription2'),
                    t('about.aboutTeamMember3Discription3'),
                    t('about.aboutTeamMember3Discription4'),
                    t('about.aboutTeamMember3Discription5'),
                    t('about.aboutTeamMember3Discription6'),
                ]}
                open={openModal3}
                onClose={handleCloseModal3}
            />
            {/* modal4 */}
            <TeamModal
                modalimage={modalimage3}
                modalTitle={t('about.aboutTeamMember4')}
                memberPosition={t('about.aboutTeamMember4Position')}
                memberDescriptions={[
                    t('about.aboutTeamMember4Discription1'),
                    t('about.aboutTeamMember4Discription2'),
                    t('about.aboutTeamMember4Discription3'),
                    t('about.aboutTeamMember4Discription4'),
                    t('about.aboutTeamMember4Discription5'),
                    t('about.aboutTeamMember4Discription6'),
                    t('about.aboutTeamMember4Discription7'),
                    t('about.aboutTeamMember4Discription8'),
                ]}
                open={openModal4}
                onClose={handleCloseModal4}
            />
            {/* modal5 */}
            <TeamModal
                modalimage={modalimage5}
                modalTitle={t('about.aboutTeamMember1')}
                memberPosition={t('about.aboutTeamMember1Position')}
                memberDescriptions={[
                    t('about.aboutTeamMember1Discription1'),
                    t('about.aboutTeamMember1Discription2'),
                    t('about.aboutTeamMember1Discription3'),
                    t('about.aboutTeamMember1Discription4'),
                ]}
                open={openModal5}
                onClose={handleCloseModal5}
            />
        </section>
    );
}

const useStyles = makeStyles((theme) => ({
    Container: {
        paddingLeft: '0px',
        paddingRight: '0px',
        marginTop:'50px',
    },
    teamSection: {
        padding: '50px',
        [theme.breakpoints.down('md')]: {
            padding: '10px 0px 10px 0px',
        }
    },
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            color: '#1E396C',
            textAlign: 'center',
            fontSize: '23px',
            padding: '10px',
          },
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '18px',
    },
    Divider: {
        width: 'auto',
        height: '2px',
        background: '#37A753',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '10px',
    },
    TeamGrid: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Teamimg: {
        width: 'auto',
        height: 'auto',
        cursor: 'pointer'
    },
    Teamname: {
        fontSize: '20px',
        color: '#1E396C',
        textAlign: 'center',
    },
    Memberpostistion: {
        fontSize: '16px',
        color: '#1E396C',
        textAlign: 'center',
    }
}));
