import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import styles from './Header.module.css';
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
function Header() {
  const [lang, setLang] = useState("Az");
  return (
    <>
      <div className={styles.nav_top}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className={styles.social}>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div className={`${styles["nav-right"]} d-flex align-items-center gap-4`}>
              <div className={styles.entrance}>
                <img src="/img/user.svg" alt="" />
                <span>Daxil olun</span></div>

              <div className="languages d-flex align-items-center">
                <Dropdown align="start" className={styles.wrapper}>
                  <Dropdown.Toggle id="lang-dropdown" className={styles.toggle}>
                    <GrLanguage />
                    <span className={styles.label}>{lang}</span>
                    <span className={styles.arrow_down}></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={styles.menu}>
                    <Dropdown.Item onClick={() => setLang("Az")}>Az</Dropdown.Item>
                    <Dropdown.Item onClick={() => setLang("RU")}>RU</Dropdown.Item>
                    <Dropdown.Item onClick={() => setLang("ENG")}>ENG</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className={styles.custom_navbar}>
        <Container>
          <Navbar.Brand href="#">
            <img src="/img/Logo.svg" alt="Logo" className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Haqqımızda" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">
                  Tariximiz
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Missiya və məqsəd
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Keyfiyyət siyasəti
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Keyfiyyətə nəzarət
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Sertifikatlar
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Beynəlxalq əməkdaşlıq
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Mərkəzlərimiz
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Həkimlərimiz
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Məmnunluq anketi
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Xidmətlər</Nav.Link>
              <Nav.Link href="#action2">Referans Eşitmə</Nav.Link>
              <Nav.Link href="#">
                Xəbərlər
              </Nav.Link>
              <Nav.Link href="#">
                Əlaqə
              </Nav.Link>
            </Nav>
            <Form className={`${styles["header_search"]} d-flex`}>
              <CiSearch />
              <Form.Control
                type="search"
                placeholder="Axtarış"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <a href="" className={styles.phone}>
              <span>
                <FaPhone />
              </span>
              *0111
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;