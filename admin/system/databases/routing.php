<?php
$tables = array(
    'routing' => array(
        'id' => array(
            'dbType' => 'varchar(36) primary key',
            'label' => '',
            'type'=>'id'
        ),
        'name' => array(
            'dbType' => 'varchar(255)',
            'label' => 'LBL_NAME',
            'type'=>'text'
        ),
        'created_at' => array(
            'dbType' => 'datetime',
            'label' => 'LBL_CREATED_AT',
            'type'=>'datetime'
        ),
        'modified_at' => array(
            'dbType' => 'datetime',
            'label' => 'LBL_MODIFIED_AT',
            'type'=>'datetime'
        ),
        'created_by' => array(
            'dbType' => 'varchar(36)',
            'rel_table' => 'users',
            'label' => 'LBL_CREATED_BY',
            'type'=>'id'
        ),
        'modified_by' => array(
            'dbType' => 'varchar(36)',
            'rel_table' => 'users',
            'label' => 'LBL_MODiFIED_BY',
            'type'=>'id'
        ),
        'target'=>array(
            'dbType' => 'varchar(255)',
            'label' => 'LBL_ROUTING_TARGET',
            'type' => 'text'
        )
    )
);