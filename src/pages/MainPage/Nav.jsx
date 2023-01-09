import React from 'react'

const Nav = ({ onLogout }) => {
// props
    

    return (
        <div className="nav">
            <h2 className="logo">Repositórios</h2>
            <p className="logout"onClick={onLogout}>Sair</p>
        </div>

    )
}

export default Nav