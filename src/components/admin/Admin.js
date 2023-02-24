import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Admin() {
 
  return (
    <div>
        <div className="wrapper">
  <nav id="sidebar" className="sidebar js-sidebar">
    <div className="sidebar-content js-simplebar">
      <a className="sidebar-brand" href="index.html">
        <span className="align-middle">ADMIN SAPA</span>
      </a>
      <ul className="sidebar-nav">
        <li className="sidebar-header">
    
        </li>
        
        <li className="sidebar-item">
          <NavLink className="sidebar-link" to={"/admin"}>
            <i className="align-middle" data-feather="grid" /> <span className="align-middle">danh mục</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link" to={"/admin/product"}>
            <i className="align-middle" data-feather="grid" /> <span className="align-middle">sản phẩm</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link" to={"/admin/users"}>
            <i className="align-middle" data-feather="grid" /> <span className="align-middle">người dùng</span>
          </NavLink>
        </li>
        
      
      </ul>
    </div>
  </nav>
  <div className="main">
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle mx-2">
        <i className="hamburger align-self-center" />
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
              <div className="position-relative">
                <i className="align-middle" data-feather="bell" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
              <div className="dropdown-menu-header">
                4 New Notifications
              </div>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-danger" data-feather="alert-circle" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Update completed</div>
                      <div className="text-muted small mt-1">Restart server 12 to complete the
                        update.
                      </div>
                      <div className="text-muted small mt-1">30m ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-warning" data-feather="bell" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Lorem ipsum</div>
                      <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate
                        hendrerit et.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-primary" data-feather="home" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Login from 192.186.1.8</div>
                      <div className="text-muted small mt-1">5h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="text-success" data-feather="user-plus" />
                    </div>
                    <div className="col-10">
                      <div className="text-dark">New connection</div>
                      <div className="text-muted small mt-1">Christina accepted your request.
                      </div>
                      <div className="text-muted small mt-1">14h ago</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dropdown-menu-footer">
                <a href="#" className="text-muted">Show all notifications</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
              <div className="position-relative">
                <i className="align-middle" data-feather="message-square" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
              <div className="dropdown-menu-header">
                <div className="position-relative">
                  4 New Messages
                </div>
              </div>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">Vanessa Tucker</div>
                      <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu
                        tortor.
                      </div>
                      <div className="text-muted small mt-1">15m ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris" />
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">William Harris</div>
                      <div className="text-muted small mt-1">Curabitur ligula sapien euismod
                        vitae.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">Christina Mason</div>
                      <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.
                      </div>
                      <div className="text-muted small mt-1">4h ago</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">Sharon Lessman</div>
                      <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed,
                        posuere ac, mattis non.
                      </div>
                      <div className="text-muted small mt-1">5h ago</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dropdown-menu-footer">
                <a href="#" className="text-muted">Show all messages</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
              <i className="align-middle" data-feather="settings" />
            </a>
            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
              <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" />
              <span className="text-dark">Chris Hung</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="user" />
                Profile</a>
              <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart" />
                Analytics</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings" /> Settings &amp;
                Privacy</a>
              <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle" /> Help Center</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Log out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <main className="content">
      <Outlet />
    </main>
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-6 text-start">
            <p className="mb-0">
              <a className="text-muted" href target="_blank"><strong>DemoAdminKit</strong></a>
              - <a className="text-muted" href target="_blank"><strong>Bootstrap Admin
                  Template</strong></a> ©
            </p>
          </div>
          <div className="col-6 text-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="text-muted" href="#" target="_blank">Support</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="#" target="_blank">Help Center</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="#" target="_blank">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="#" target="_blank">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

    </div>
  )
}
