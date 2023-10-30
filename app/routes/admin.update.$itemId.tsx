// import React from 'react'

import {
  Form,
  useLoaderData
  /* Link, 
   useParams, 
  useLoaderData, useNavigate  */
} from '@remix-run/react'
import type {
  // ActionFunctionArgs,
  LoaderFunctionArgs
} from '@remix-run/node'
import {
  json
  // redirect
} from '@remix-run/node'

import invariant from 'tiny-invariant'
import Icon from '~/components/Icon'
import Input from '~/components/form/Input'
import {
  categories,
  // type Dish,
  getDish
} from '~/data'
import Thumbnail from '~/components/Thumbnail'
import BackButton from '~/components/actions/BackButton'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.itemId, 'produit non trouvé')
  const item = await getDish(params.itemId)
  if (!item) {
    throw new Response('non trouvé', { status: 404 })
  }
  return json({ item })
}

const UpdateItem = () => {
  const { item } = useLoaderData<typeof loader>()
  // const {itemId } = useParams()

  // const item = getDish(itemId|| '0')
  console.log(item)
  return (
    <>
      <div className='col-sm-6'>
        <h2>
          <strong>Modifier un produit</strong>
        </h2>
        <br />
        <Form
          className='form'
          /* action="<?php echo 'update.php?id='.$id;?>" */ role='form'
          method='post' /* enctype="multipart/form-data" */
        >
          <Input
            label='Nom'
            value='name'
            entry=''
            setEntry={() => console.log('entry')}
          />
          <Input
            label='Description'
            value='description'
            entry=''
            setEntry={() => console.log('entry')}
          />
          <Input
            label='Prix'
            value='price'
            entry=''
            setEntry={() => console.log('entry')}
            inputType='number'
          />
          {/* <Input
            label='Image'
            value='image'
            entry=''
            setEntry={() => console.log('entry')}
            inputType='file'
          /> */}

          <div className='form-group'>
            <label htmlFor='category'>Catégorie:</label>
            <select className='form-control' id='category' name='category'>
              {categories.map(cat => (
                <option key={cat.id} value={cat.label}>
                  {cat.label}
                </option>
              ))}
            </select>
            <span className='help-inline'>
              {/* <?php echo $categoryError;?> */}
            </span>
          </div>

          <div className='form-group'>
            <label htmlFor='image'>Image:</label>
            <p>{item.image}</p>
            <label htmlFor='image'>Sélectionner une nouvelle image:</label>
            <input type='file' id='image' name='image' />
            {/* <span className="help-inline">{<?php echo $imageError;?>}</span> */}
          </div>
          <br />
          <div className='form-actions'>
            <button type='submit' className='btn btn-success'>
              <Icon name='pencil' /> Modifier
            </button>
            <BackButton />
          </div>
          {/* <form class="form" action="<?php echo 'update.php?id='.$id;?>" role="form" method="post" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="name">Nom:
                            <input type="text" class="form-control" id="name" name="name" placeholder="Nom" value="<?php echo $name;?>">
                            <span class="help-inline"><?php echo $nameError;?></span>
                        </div>
                        <div class="form-group">
                            <label for="description">Description:
                            <input type="text" class="form-control" id="description" name="description" placeholder="Description" value="<?php echo $description;?>">
                            <span class="help-inline"><?php echo $descriptionError;?></span>
                        </div>
                        <div class="form-group">
                        <label for="price">Prix: (en €)
                            <input type="number" step="0.01" class="form-control" id="price" name="price" placeholder="Prix" value="<?php echo $price;?>">
                            <span class="help-inline"><?php echo $priceError;?></span>
                        </div>


                        <div class="form-group">
                            <label for="category">Catégorie:
                            <select class="form-control" id="category" name="category">
                            <?php
                               $db = Database::connect();
                               foreach ($db->query('SELECT * FROM categories') as $row) 
                               {
                                    if($row['id'] == $category)
                                        echo '<option selected="selected" value="'. $row['id'] .'">'. $row['name'] . '</option>';
                                    else
                                        echo '<option value="'. $row['id'] .'">'. $row['name'] . '</option>';;
                               }
                               Database::disconnect();
                            ?>
                            </select>
                            <span class="help-inline"><?php echo $categoryError;?></span>
                        </div>
                        <div class="form-group">
                            <label for="image">Image:</label>
                            <p><?php echo $image;?></p>
                            <label for="image">Sélectionner une nouvelle image:</label>
                            <input type="file" id="image" name="image"> 
                            <span class="help-inline"><?php echo $imageError;?></span>
                        </div>
                        <br>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-pencil"></span> Modifier</button>
                            <a class="btn btn-primary" href="index.php"><span class="glyphicon glyphicon-arrow-left"></span> Retour</a>
                       </div>
                    </form> */}
        </Form>
      </div>
      <div className='col-sm-6 site'>
        <Thumbnail item={item} />
      </div>
    </>
  )
}

export default UpdateItem
