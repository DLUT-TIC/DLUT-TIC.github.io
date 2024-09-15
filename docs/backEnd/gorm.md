---
title: Gorm
data: 2024/8/5
---

# Gorm

## 框架介绍
Gorm 是 Go 语言中常用的 ORM（对象关系映射）库，它简化了与数据库的交互，提供了一套直观的 API 来处理数据库操作。通过 Gorm，开发者可以轻松地进行 CRUD（创建、读取、更新、删除）操作，同时保持代码简洁易读。以下是 Gorm 的一些主要特点：

- **自动迁移**  
  Gorm 支持根据定义的结构体自动迁移数据库表，确保数据库结构与模型保持同步。

- **CRUD 操作**  
  Gorm 提供了完整的 CRUD 操作，可以轻松执行数据的插入、查询、更新、删除等操作，且支持链式调用，使代码更加简洁。

- **关联**  
  Gorm 支持多种关系映射，如一对一、一对多和多对多，开发者可以使用简单的定义来处理复杂的数据库关系。

- **钩子函数**  
  Gorm 提供了生命周期钩子函数（如 BeforeCreate、AfterUpdate 等），可以在数据库操作前后执行自定义逻辑。

- **事务支持**  
  Gorm 内置事务管理，允许开发者轻松地在事务中执行数据库操作，并自动处理回滚和提交。

- **数据库支持**  
  Gorm 支持多种数据库系统，包括 MySQL、PostgreSQL、SQLite、SQL Server 等，方便在不同数据库之间进行切换。

- **Gorm 相关文档**
    - GitHub 地址: [https://github.com/go-gorm/gorm](https://github.com/go-gorm/gorm)
    - 中文文档: [https://gorm.io/zh_CN/docs/](https://gorm.io/zh_CN/docs/)

## 学习目标
- Gorm 的基本增删改查操作
- 关联模型的处理
- 使用钩子函数
- 事务管理
- 自定义查询与优化

## 学习资料
- [官方文档](https://gorm.io/)
- [GORM中文文档](https://learnku.com/docs/gorm/v2)  
