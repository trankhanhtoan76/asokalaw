<?php
$tables = array(
    'users' => array(
        'id' => array(
            'dbType' => 'varchar(36) primary key',
            'label' => 'LBL_ID',
            'type' => 'id'
        ),
        'name' => array(
            'dbType' => 'varchar(255)',
            'label' => 'LBL_NAME'
        ),
        'username' => array(
            'dbType' => 'varchar(100)',
            'label' => 'LBL_USERNAME',
            'type'=>'text'
        ),
        'password' => array(
            'dbType' => 'varchar(255)',
            'label' => 'LBL_PASSWORD',
            'type'=>'password'
        ),
        'last_login' => array(
            'dbType' => 'datetime',
            'label' => 'LBL_LAST_LOGIN',
            'type'=>'datetime'
        ),
        'created_at' => array(
            'dbType' => 'datetime',
            'label' => 'LBL_CREATED_AT',
            'type' => 'datetime',
        ),
        'modified_at' => array(
            'dbType' => 'datetime',
            'label' => 'LBL_MODIFIED_AT',
            'type' => 'datetime'
        ),
        'created_by' => array(
            'dbType' => 'varchar(36)',
            'rel_table' => 'users',
            'label' => 'LBL_CREATED_BY',
            'type' => 'id'
        ),
        'modified_by' => array(
            'dbType' => 'varchar(36)',
            'rel_table' => 'users',
            'label' => 'LBL_MODiFIED_BY',
            'type' => 'id'
        ),
        'is_admin' => array(
            'dbType' => 'bool',
            'label' => 'LBL_IS_ADMIN',
            'type' => 'bool'
        )
    )
);