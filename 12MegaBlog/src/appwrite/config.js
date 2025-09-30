import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("appwrite service :: createPost :: error", error);
            
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug, {title, content, featuredImage, status}){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("appwrite service :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("appwrite service :: getPosts :: error", error);
            return false
        }
    }

    // file upload services

    async uploadFile(files){
        try {
            return await this.databases.createfile(conf.appwriteBucketId,
                ID.unique(),
                files
            )
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.databases.deleteFile(conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
        // try {
        //     await this.databases.getFilePreview(conf.appwriteBucketId,
        //         appwriteBucketId,
        //         fileId
        //     )
        // } catch (error) {
        //     console.log("appwrite service :: getFilePreview :: error", error);
        //     return false
        // }
    }
}


const service =new Service()
export default service