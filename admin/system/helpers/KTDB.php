<?php

class KTDB
{
    protected $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function insert($table, $data)
    {
        $tmp1 = "insert into " . $table . "(";
        $tmp2 = "values(";
        foreach ($data as $key => $val) {
            if ($val === null) continue;
            $tmp1 .= mysqli_real_escape_string($this->conn, $key) . ',';
            $tmp2 .= "'" . mysqli_real_escape_string($this->conn, $val) . "',";
        }
        $tmp1 = rtrim($tmp1, ',') . ')';
        $tmp2 = rtrim($tmp2, ',') . ');';
        $sql = $tmp1 . ' ' . $tmp2;
        return $this->conn->query($sql);
    }

    function update($table, $data, $id)
    {
        $sql = "update {$table} set ";
        foreach ($data as $k => $v) {
            $k1 = mysqli_real_escape_string($this->conn, $k);
            $v1 = mysqli_real_escape_string($this->conn, $v);
            $sql .= "{$k1}='{$v1}',";
        }
        $sql = rtrim($sql, ',');
        $sql .= " where id='{$id}'";
        return $this->conn->query($sql);
    }

    function delete($table, $id)
    {
        $sql = "delete from $table where id='$id'";
        return $this->conn->query($sql);
    }

    public static function getAllDBDef()
    {
        $def = array();
        $files = scandir('system/databases');
        foreach ($files as $file) {
            $tables = array();
            if (is_file('system/databases/' . $file)) {
                include 'system/databases/' . $file;
                foreach ($tables as $table => $tableDetail) {
                    $def[$table] = $tableDetail;
                }
            }
        }
        $files = scandir('app/database');
        foreach ($files as $file) {
            $tables = array();
            if (is_file('app/database/' . $file)) {
                include 'app/database/' . $file;
                foreach ($tables as $table => $tableDetail) {
                    $def[$table] = $tableDetail;
                }
            }
        }
        return $def;
    }

    function gets($sql)
    {
        $data = array();
        if ($result = $this->conn->query($sql)) {
            while ($row = $result->fetch_assoc()) {
                if (isset($row['id'])) {
                    $data[$row['id']] = $row;
                } else {
                    $data[] = $row;
                }
            }
        }
        return $data;
    }

    function get($sql)
    {
        $data = array();
        if ($result = $this->conn->query($sql)) {
            if ($row = $result->fetch_assoc()) {
                $data = $row;
            }
        }
        return $data;
    }

    function query($sql)
    {
        return $this->conn->query($sql);
    }
}